import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const VirtualExtractor: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "virtual-extractor",
    names: [
        {value: "Virtual Extractor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've rescued or kidnapped your first hostage during Test Mode, earning yourself the Virtual Extractor badge."}],
    acquisition: "Rescue one captive while running a Architect mission in test mode.",
    links: [
        {title: "Virtual Extractor Badge", href: "https://paragonwiki.com/wiki/Virtual_Extractor_Badge"}
    ],
    imageKeys: [{value: "core.ae.virtual-extractor"}]
};