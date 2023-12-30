import React from 'react';

const reviews = [
  {
    username: 'Maeglin',
    plattform: 'Twitter',
    profilePicture: '/img/pictures/reviews/maeglin.webp',
    fullText:
      'Day 49/100 set up Homarr just for a test spin. It\'s a nice dashboard and the Arrs integration especialy the calendar is awesome.',
    link: 'https://twitter.com/Maeglin931/status/1555725442744586240',
  },
  {
    username: 'Noted',
    plattform: 'noted.lol',
    profilePicture: 'https://noted.lol/content/images/2023/11/Logo-2.1.png',
    fullText: 'Homarr - A Simple, Self Hosted and Lightweight Server Homepage',
    link: 'https://noted.lol/homarr-a-simple-self-hosted-and-lightweight-server-homepage/',
  },
  {
    username: 'IBRACORP',
    plattform: 'Youtube',
    profilePicture: '/img/pictures/reviews/ibracorp.webp',
    fullText: 'Homarr Is Here To Stay. Here\'s Why | Selfhosted Homepage',
    link: 'https://www.youtube.com/watch?v=Mk9ZZiH5qi0',
  },
  {
    username: 'The Geek Freaks',
    plattform: 'YouTube',
    profilePicture: 'https://yt3.ggpht.com/6EWnfiBIE7Bus2MAS6zJsBARQTPWE7B3v7PXdwX1OfohaxylMqdQr-vt4j8gYZTJy2MBiOvu=s48-c-k-c0x00ffffff-no-rj',
    fullText: 'MEHR Durchblick mit eigenem Dashboard! (Unraid Homarr Tutorial) ',
    link: 'https://www.youtube.com/watch?v=DNGRL5QdBlg',
  },

  {
    username: 'u/uncmnsense',
    plattform: 'r/selfhosted',
    profilePicture: '/img/pictures/reviews/r_selfhosted.webp',
    fullText: 'Anyone using homarr? check it out, its pretty fancy...',
    link: 'https://www.reddit.com/r/selfhosted/comments/wqxsk3/anyone_using_homarr_check_it_out_its_pretty_fancy',
  },
  {
    username: 'TechHut',
    plattform: 'YouTube',
    profilePicture: 'https://yt3.ggpht.com/TUoF-6QCUIKy6XgFtMG5FWi5FLVhtaUPtTOLvE7Ca3eJif1_RKBci07fKK-QvKxhC0HALEBH7Q=s48-c-k-c0x00ffffff-no-rj',
    fullText: 'my FAVORITE Home Server Dashboard - Homarr Setup in Docker',
    link: 'https://www.youtube.com/watch?v=A6vcTIzp_Ww',
  },
  {
    username: 'u/RoachedCoach',
    plattform: 'r/unRAID',
    profilePicture: '/img/pictures/reviews/r_unraid.webp',
    fullText:
      'I enjoy Homarr - mostly because it\'s very simple, straightforward, and attractive.',
    link: 'https://www.reddit.com/r/unRAID/comments/wk3x2s/comment/ijn4vpg/',
  },
  {
    username: 'Mariushosting',
    plattform: 'mariushosting.com',
    link: 'https://mariushosting.com/synology-install-homarr-with-portainer/',
    fullText: 'The thing I like most about Homarr is its speed and simplicity in adding links of your favorite docker apps. You can use it as a bookmark as well. Great integration with Plex, Sonarr, Radarr etc. Homarr supports multiple configs and persistent storage.',
    profilePicture: 'https://mariushosting.com/wp-content/uploads/2021/05/cropped-mariushosting512-32x32.png',
  },
  {
    username: 'u/YankeesIT',
    plattform: 'r/selfhosted',
    profilePicture: '/img/pictures/reviews/r_selfhosted.webp',
    fullText: 'My Homarr setup...',
    link: 'https://www.reddit.com/r/selfhosted/comments/x84c9v/my_homarr_setup/',
  },
  {
    username: 'Selfhosted Corner',
    plattform: 'Twitter',
    profilePicture: 'https://pbs.twimg.com/profile_banners/1674813613650120705/1691340056/600x200',
    fullText: 'So you have many different #Selfhosted apps and you are having trouble organizing them? Fear not cause homarr is here is to save you the hassle.',
    link: 'https://twitter.com/SlhstdCorner/status/1698674826351685648',
  },
];

export default function HomepageUserReviews() {
  return (
    <div className="mt-24">
      <h2 className="text-5xl font-extrabold mb-10">Here's what our community says 🙌</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {reviews.map((review, index) => (
          <article className="hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded">
            <a className="hover:no-underline h-full block" href={review.link} target="_blank" data-umami-event={"Open review"}>
              <div className="flex items-center mb-4 space-x-4">
                <img className="w-10 h-10 rounded-full" src={review.profilePicture} alt="profile" />
                <div className="space-y-1 font-medium dark:text-white">
                  <p className="m-0">
                    {review.username}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
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
