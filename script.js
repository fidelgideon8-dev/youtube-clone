const videos = [
    {
        thumbnail: "thumbnail-1.webp",
        profile: "channel-1.jpeg",
        title: "Talking Tech and AI with Google CEO Sundar Pichai!",
        author: "Marques Brownlee",
        stats: "3.4M views · 6 months ago",
        time: "14:20"
    },
    {
        thumbnail: "thumbnail-2.webp",
        profile: "channel-2.jpeg",
        title: "Try Not To Laugh Challenge #9",
        author: "Markiplier",
        stats: "19M views · 4 years ago",
        time: "8:22"
    },
    {
        thumbnail: "thumbnail-3.webp",
        profile: "channel-3.jpeg",
        title: "Crazy Tik Toks Taken Moments Before DISASTER",
        author: "SSSniperWolf",
        stats: "12M views · 1 year ago",
        time: "9:13"
    },
    {
        thumbnail: "thumbnail-4.webp",
        profile: "channel-4.jpeg",
        title: "The Simplest Math Problem No One Can Solve",
        author: "Veritasium",
        stats: "18M views · 4 months ago",
        time: "22:09"
    },
    {
        thumbnail: "thumbnail-6.webp",
        profile: "channel-6.jpeg",
        title: "Anything You Can Fit In The Circle I'll Pay For",
        author: "MrBeast",
        stats: "141M views · 1 year ago",
        time: "19:59"
    },
    {
        thumbnail: "thumbnail-5.webp",
        profile: "channel-5.jpeg",
        title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
        author: "CS Dojo",
        stats: "519K views · 5 years ago",
        time: "11:17"
    },

    // Video 7
    {
        thumbnail: "thumbnail-7.webp",
        profile: "channel-7.jpeg",
        title: "Why Planes Don't Fly Over Tibet",
        author: "RealLifeLore",
        stats: "2.4M views · 3 months ago",
        time: "12:45"
    },

    // Video 8
    {
        thumbnail: "thumbnail-8.webp",
        profile: "channel-8.jpeg",
        title: "Inside The World's Biggest Passenger Plane",
        author: "Tech Vision",
        stats: "1.8M views · 5 months ago",
        time: "18:32"
    },

    // Video 9
    {
        thumbnail: "thumbnail-9.webp",
        profile: "channel-9.jpeg",
        title: "The SECRET to Super Human STRENGTH",
        author: "ThenX",
        stats: "4.2M views · 8 months ago",
        time: "15:21"
    },

    // Video 10
    {
        thumbnail: "thumbnail-10.webp",
        profile: "channel-10.jpeg",
        title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        author: "Business Insider",
        stats: "6.7M views · 1 year ago",
        time: "30:14"
    },

    // Video 11s
    {
        thumbnail: "thumbnail-11.webp",
        profile: "channel-11.jpeg",
        title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai ",
        author: "Destination Tips",
        stats: "925K views · 2 months ago",
        time: "16:48"
    },

    // Video 12
    {
        thumbnail: "thumbnail-12.webp",
        profile: "channel-12.jpeg",
        title: "What would happen if you didn’t drink water? - Mia Nacamulli",
        author: "TED-Ed",
        stats: "3.1M views · 7 months ago",
        time: "10:27"
    },

    // Video 13
    {
        thumbnail: "thumbnail-13.avif",
        profile: "channel-13.jpg",
        title: "NVIDIA CEO Jensen Huang's Vision for the Future",
        author: "Cleo Abram",
        stats: "8.2M views · 4 months ago",
        time: "13:56"
    },

    // Video 14
    {
        thumbnail: "thumbnail-14.avif",
        profile: "channel-14.jpg",
        title: "Top 17 New Technology Trends That Will Define 2026",
        author: "AI Uncovered",
        stats: "5.4M views · 1 year ago",
        time: "21:43"
    },

    // Video 15
    {
        thumbnail: "thumbnail-15.avif",
        profile: "channel-15.jpg",
        title: "3 Step Afrohouse x Amapiano x Gqom Mix 2026 | Seaview Sunset Chill Vibes",
        author: "Amanda Par",
        stats: "1.2M views · 6 months ago",
        time: "17:09"
    },

    // Video 16 
    {
        thumbnail: "thumbnail-16.avif",
        profile: "channel-16.jpg",
        title: "DDG - Elon Musk ft. Gunna (Official Music Video)",
        author: "DDG",
        stats: "2.8M views · 9 months ago",
        time: "14:37"
    },

    // Video 17
    {
        thumbnail: "thumbnail-17.avif",
        profile: "channel-17.jpg",
        title: "THE DNA TEST",
        author: "Mammito",
        stats: "7.5M views · 3 weeks ago",
        time: "19:24"
    },

    // Video 18
    {
        thumbnail: "thumbnail-18.avif",
        profile: "channel-18.jpg",
        title: "Electro Music Mix",
        author: "House of Music",
        stats: "3.9M views · 2 years ago",
        time: "11:52"
    },

    // Video 19
    {
        thumbnail: "thumbnail-19.jpg",
        profile: "channel-19.jpg",
        title: "I Took A Pill In Ibiza",
        author: "Mike Posner",
        stats: "1.6M views · 4 months ago",
        time: "9:41"
    },

    // Video 20
    {
        thumbnail: "thumbnail-20.avif",
        profile: "channel-20.jpg",
        title: "Sauti Sol - Melanin ft Patoranking (Official Music Video) SMS [Skiza 1051692] to 811",
        author: "Sauti Sol",
        stats: "2.9M views · 5 months ago",
        time: "25:18"
    }
];




const videoGrid = document.getElementById("videoGrid");

videos.forEach(function(video) {

    const videoPreview = document.createElement("div");

    videoPreview.classList.add("video-preview");

    videoPreview.innerHTML = `
        <div class="thumbnail-row">

            <img
                class="thumbnail-1"
                src="${video.thumbnail}"
                alt="${video.title}"
            >

            <div class="video-time">
                ${video.time}
            </div>

        </div>

        <div class="video-info-grid">

            <div class="channel-picture">

                <img
                    class="profile-picture"
                    src="${video.profile}"
                    alt="${video.author}"
                >

            </div>

            <div class="video-info">

                <p class="video-title">
                    ${video.title}
                </p>

                <p class="video-author">
                    ${video.author}
                </p>

                <p class="video-stats">
                    ${video.stats}
                </p>

            </div>

        </div>
    `;

    videoGrid.appendChild(videoPreview);
});


const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", function () {

    const searchText = searchBar.value.toLowerCase().trim();

    const filteredVideos = videos.filter(function (video) {

        return (
            video.title.toLowerCase().includes(searchText) ||
            video.author.toLowerCase().includes(searchText)
        );

    });


    videoGrid.innerHTML = "";


    filteredVideos.forEach(function (video) {

        const videoPreview = document.createElement("div");

        videoPreview.classList.add("video-preview");

        videoPreview.innerHTML = `
            <div class="thumbnail-row">

                <img
                    class="thumbnail-1"
                    src="${video.thumbnail}"
                    alt="${video.title}"
                >

                <div class="video-time">
                    ${video.time}
                </div>

            </div>

            <div class="video-info-grid">

                <div class="channel-picture">

                    <img
                        class="profile-picture"
                        src="${video.profile}"
                        alt="${video.author}"
                    >

                </div>

                <div class="video-info">

                    <p class="video-title">
                        ${video.title}
                    </p>

                    <p class="video-author">
                        ${video.author}
                    </p>

                    <p class="video-stats">
                        ${video.stats}
                    </p>

                </div>

            </div>
        `;

        videoGrid.appendChild(videoPreview);

    });

});
