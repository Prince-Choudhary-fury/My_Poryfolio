const projectsData = {
    "warlands": {
        id: "warlands",
        title: "Warlands",
        badge: "Game",
        badgeColor: "var(--badge-red, #e74c3c)",
        subtitle: "Warlands Corp (Offsite)",
        date: "Sep 2021 to Present (Full Time)",
        link: "https://warlands.io/",
        description: "Warlands is a unique metaverse Game that combines Moba and Battle Royale mechanics in a competitive format, where users strategically survive and conquer areas of the playfield in 5v5 team battles.",
        mediaType: "video",
        mediaSrc: "assets/img/game video/Gameplay Warlands.mp4"
    },
    "underground-waifus": {
        id: "underground-waifus",
        title: "Underground Waifus",
        badge: "Game",
        badgeColor: "var(--badge-red, #e74c3c)",
        subtitle: "Warlands Corp (Offsite)",
        date: "Sep 2021 to Present (Full Time)",
        link: "https://undergroundwaifus.com/",
        description: "Underground Waifus is a captivating NFT card game that merges physical and digital collecting. With unique editions, limited collections, and a player-driven economy, it’s a fusion of art, strategy, and blockchain technology. Dive into the future of TCG multiplayer and become a formidable waifus leader!",
        mediaType: "video",
        mediaSrc: "assets/img/game video/UndergroundWaifusTCG.mp4"
    },
    "survival-game": {
        id: "survival-game",
        title: "Survival Game",
        badge: "Game",
        badgeColor: "var(--badge-red, #e74c3c)",
        subtitle: "Personal Project",
        date: "Duration: Jul 2021 - Aug 2021",
        link: "https://www.youtube.com/watch?v=TqqLzDVP2v0",
        description: "It is a First Person Survival game. Here the player was stuck on an island due to his plane crashed and now he had to gather resources to survive on this island. Here players can do construction, craft different weapons, and hunt animals to survive.",
        mediaType: "youtube",
        mediaSrc: "https://www.youtube.com/embed/TqqLzDVP2v0"
    },
    "fusion-multiplayer": {
        id: "fusion-multiplayer",
        title: "Fusion Multiplayer Addon",
        badge: "System",
        badgeColor: "var(--badge-green, #2ecc71)",
        subtitle: "Personal Project",
        date: "Duration: Jan 2024 - Feb 2024",
        link: "https://www.youtube.com/watch?v=yGSR8xzqIEs",
        description: `<ul>
            <li><b>Session Manager</b> to synchronize room details and game statistics, enhancing the overall gaming experience.</li>
            <li><b>Player Data Handler</b>, responsible for syncing all player stats.</li>
            <li><b>Rejoining mechanism</b> for players to seamlessly re-enter rooms in case of network issues or sudden disconnects.</li>
            <li><b>Host Migration</b> functionality, creating a new host if the existing one left the room, ensuring uninterrupted gameplay.</li>
            <li><b>Lobby</b> to get all available room.</li>
            <li><b>Voice and Text chat</b> to comunicate InGame.</li>
            <li><b>Network Character Controller</b>, ensuring synchronized player movement within the gaming environment.</li>
            <li>Network synchronized <b>weapon</b>.</li>
            <li><b>URP Settings Menu</b> (Including Graphics, Display and Audio Settings).</li>
        </ul>`,
        mediaType: "youtube",
        mediaSrc: "https://www.youtube.com/embed/yGSR8xzqIEs"
    },
    "character-controller": {
        id: "character-controller",
        title: "Character Controller",
        badge: "System",
        badgeColor: "var(--badge-green, #2ecc71)",
        subtitle: "Personal Project",
        date: "Jul 2023 to Jul 2023",
        link: "https://www.youtube.com/watch?v=GE18HUyden4",
        description: "The character controller I made in Unity lets players move smoothly and dodge, skid, roll, and use weapons like swords, bows, and magic. It's easy to control and adds fun and dynamic gameplay, allowing players to explore and fight in the game world with different styles and strategies.",
        mediaType: "youtube",
        mediaSrc: "https://www.youtube.com/embed/GE18HUyden4"
    },
    "dragon-controller": {
        id: "dragon-controller",
        title: "Dragon Controller",
        badge: "System",
        badgeColor: "var(--badge-green, #2ecc71)",
        subtitle: "Personal Project",
        date: "Duration: Aug 2023 to Aug 2023",
        link: "https://www.youtube.com/watch?v=r51LUL3Lt7o",
        description: "The dragon controller I created in Unity enables players to control a dragon's movement with ease. It features a realistic locomotion system that allows the dragon to fly, glide, and walk on the ground seamlessly. Players can navigate through the game world using the dragon's wings, making the experience immersive and exciting.",
        mediaType: "youtube",
        mediaSrc: "https://www.youtube.com/embed/r51LUL3Lt7o"
    },
    "race-game": {
        id: "race-game",
        title: "Race Game",
        badge: "Game",
        badgeColor: "var(--badge-red, #e74c3c)",
        subtitle: "Personal Project",
        date: "Duration: Jul 2021 - Jul 2021",
        link: "https://www.youtube.com/watch?v=XtzNrtcO0WA",
        description: "Different types of Tracks to race on it. This Game has different environments for different game levels and it also consist of so many exciting difficulties in between the race. There is a garage available in the game where player can boost their car to next level. The main motive behind this game was to create a realistic Game with different kinds of racing tracks at different locations.",
        mediaType: "youtube",
        mediaSrc: "https://www.youtube.com/embed/XtzNrtcO0WA"
    }
};

// If using ES modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
