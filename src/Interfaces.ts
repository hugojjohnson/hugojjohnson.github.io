import React, { Dispatch, SetStateAction } from "react";

export type Tags = {
    name: string,
    color: string,
    tool: Boolean,
    link: string
}
export type TagsContext = [Tags[], Dispatch<SetStateAction<Tags[]>>]

export type Project = {
    url: string,
    title: string,
    blurb: string,
    cover: string,
    githubLink: string,
    tags: string[],
    blog: React.ReactElement
}

type RequestResponseSuccess<T> = {
    success: true;
    data: T;
    status?: number;
};
type RequestResponseFailure = {
    success: false;
    data: string;
    status?: number;
};
export type RequestResponse<T> = RequestResponseSuccess<T> | RequestResponseFailure;
