import { ArtistModel } from "./artist.model";

export interface TrackModel {
    _id: string | number,
    name: string,
    description?: string,
    album: string,
    cover: string,
    url: string,
    artist?: ArtistModel
}