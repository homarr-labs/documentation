import React from 'react';

export default function HomepageUserReviews() {
  const reviews = [
    {
      username: 'Maeglin',
      plattform: 'Twitter',
      profilePicture: '/img/pictures/review/maeglin.webp',
      fullText:
        "Day 49/100 set up Homarr just for a test spin. It's a nice dashboard and the Arrs integration especialy the calendar is awesome.",
      link: 'https://twitter.com/Maeglin931/status/1555725442744586240',
    },
    {
      username: 'IBRACORP',
      plattform: 'Youtube',
      profilePicture: '/img/pictures/review/ibracorp.webp',
      fullText: "Homarr Is Here To Stay. Here's Why | Selfhosted Homepage",
      link: 'https://www.youtube.com/watch?v=Mk9ZZiH5qi0',
    },
    {
      username: 'u/uncmnsense',
      plattform: 'r/selfhosted',
      profilePicture: '/img/pictures/review/r_selfhosted.webp',
      fullText: 'Anyone using homarr? check it out, its pretty fancy...',
      link: 'https://www.reddit.com/r/selfhosted/comments/wqxsk3/anyone_using_homarr_check_it_out_its_pretty_fancy',
    },
    {
      username: 'u/RoachedCoach',
      plattform: 'r/unRAID',
      profilePicture: '/img/pictures/review/r_unraid.webp',
      fullText:
        "I enjoy Homarr - mostly because it's very simple, straightforward, and attractive.",
      link: 'https://www.reddit.com/r/unRAID/comments/wk3x2s/comment/ijn4vpg/',
    },
    {
      username: 'u/YankeesIT',
      plattform: 'r/selfhosted',
      profilePicture: '/img/pictures/review/r_selfhosted.webp',
      fullText: 'My Homarr setup...',
      link: 'https://www.reddit.com/r/selfhosted/comments/x84c9v/my_homarr_setup/',
    },
  ];

  return (
    <div className="mt-24">
      <h2 className="text-4xl mb-10">Here's what our community says 🙌</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {reviews.map((review, index) => (
          <article className='hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded'>
            <a className='hover:no-underline h-full block' href={review.link} target="_blank">
              <div className="flex items-center mb-4 space-x-4">
                <img className="w-10 h-10 rounded-full" src={review.profilePicture} alt="profile" />
                <div class="space-y-1 font-medium dark:text-white">
                  <p className="m-0">
                    {review.username}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Posted on {review.plattform}
                    </time>
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm m-0">{review.fullText}</p>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
