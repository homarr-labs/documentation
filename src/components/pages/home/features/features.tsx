import {
  IconAdjustments,
  IconDragDrop,
  IconIcons,
  IconKey,
  IconLanguage,
  IconPlug,
  type TablerIcon,
} from '@tabler/icons-react';

interface Feature {
  icon: TablerIcon;
  title: string;
  content: string;
}

const featureList: Feature[] = [
  {
    icon: IconDragDrop,
    title: 'Easy to use drag and drop system',
    content:
      'Using the drag and drop system, you can simply move parts of your dashboard using your mouse or your finger on mobile devices. No YAML / JSON configurations are involved.',
  },
  {
    icon: IconIcons,
    title: 'Over 10K icons available',
    content:
      'We integrate with many different icon repositories to provide you with high quality and easy to use images.',
  },
  {
    icon: IconPlug,
    title: 'Seamless integrations',
    content:
      'Integrate with your favourite applications to display their status or control them. Scales well with hundreds of users. Robust background job system enables high performance & scalability.',
  },
  {
    icon: IconKey,
    title: 'Authentication & Authorization built in',
    content:
      'Support for credentials authentication, OIDC and LDAP. Complex system to manage permissions for users',
  },
  {
    icon: IconLanguage,
    title: '26 languages available',
    content: 'Accessible for users in many countries thanks to the community translation program',
  },
  {
    icon: IconAdjustments,
    title: 'Detailed settings for customization',
    content:
      'Adjust apps and dashboards until you like them with helpful and easy to understand settings',
  },
];
function FeatureComponent(props: Feature) {
  return (
    <div className="group p-4 rounded-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="rounded-xl bg-gray-100 dark:bg-zinc-800 p-3 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <props.icon size={40} className="text-primary-600 dark:text-primary-400" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-gray-200 mt-0 mb-2">
            {props.title}
          </h3>
          <p className="m-0 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 mb-16">
      {featureList.map((props, idx) => (
        <FeatureComponent key={idx} {...props} />
      ))}
    </div>
  );
}
