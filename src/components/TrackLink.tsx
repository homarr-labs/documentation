import Link from '@docusaurus/Link';
import type { Props as LinkProps } from '@docusaurus/Link';
import posthog from 'posthog-js';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { isPostHogEnabled } from '../posthog-client';

type TrackLinkProps = LinkProps & {
  eventName: string;
  children: ReactNode;
};

type TrackAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  children: ReactNode;
};

const relForTarget: Partial<Record<NonNullable<AnchorHTMLAttributes<HTMLAnchorElement>['target']>, string>> = {
  _blank: 'noopener noreferrer',
};

function captureEvent(eventName: string) {
  if (!isPostHogEnabled) {
    return;
  }
  posthog.capture(eventName);
}

export function TrackLink({ eventName, onClick, ...props }: TrackLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        captureEvent(eventName);
        onClick?.(event);
      }}
    />
  );
}

export function TrackAnchor({ eventName, onClick, target, rel, ...props }: TrackAnchorProps) {
  const resolvedRel = rel ?? relForTarget[target ?? ''];

  return (
    <a
      {...props}
      target={target}
      rel={resolvedRel}
      onClick={(event) => {
        captureEvent(eventName);
        onClick?.(event);
      }}
    />
  );
}
