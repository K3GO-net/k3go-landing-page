'use client'

import {Introduction} from "@/src/sections/Introduction";
import {ProjectMarketers} from "@/src/sections/project-marketers";
import {KeyOpinionLeaders} from "@/src/sections/key-opinion-leaders";
import {Community} from "@/src/sections/Community";

export const LandingPage = () => {
    return (
        <div className="">
            <Introduction/>
            <ProjectMarketers/>
            <KeyOpinionLeaders/>
            <Community/>
        </div>
    )
}