import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DUSTRanger: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "dust-ranger",
    names: [
        {value: "D.U.S.T. Ranger"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "You have trained with the elite D.U.S.T. of First Ward during your free time, earning the D.U.S.T. Ranger Day Job." +
            " Logging out in the D.U.S.T Training Facility will hone your skills further, granting you a bonus to your damage, accuracy, and range for a short time."
    }],
    acquisition: "Log out at the D.U.S.T. Training Facility in First Ward for 100 hours.",
    effect: "Day Job: Auto: +Dmg (All), +ToHit, +Range",
    links: [
        {title: "D.U.S.T. Ranger Badge", href: "https://paragonwiki.com/wiki/D.U.S.T._Ranger_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.dust-ranger"}]
};
