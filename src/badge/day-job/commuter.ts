import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Commuter: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "commuter",
    names: [
        {type: Alternate.H, value: "Commuter"},
        {type: Alternate.V, value: "Fare Jumper"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have traveled all over Paragon City for various day jobs during your free time earning the Commuter Day Job." +
                " Logging out in a Train Station will earn you a speed boost, when you log back in, for a short time."
        },
        {
            type: Alternate.V,
            value: "You miss the monorails of Paragon City, but in the Rogue Isles it would just be too impractical."
        }
    ],
    acquisition: "Log out inside Train Stations for 100 hours.",
    effect: "Day Job: +Movement Speed",
    links: [
        {title: "Commuter Badge", href: "https://paragonwiki.com/wiki/Commuter_Badge"},
        {title: "Fare Jumper Badge", href: "https://paragonwiki.com/wiki/Fare_Jumper_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.commuter"}]
};
