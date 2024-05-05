/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


export default definePlugin({
    name: "Universal Volume Booster",
    description: "Allows you to increase the volume of users in voice channels above the normal maximum.",
    authors: [Devs.Kaitlyn],
    patches: [],
    start() { },
    stop() { }
});
