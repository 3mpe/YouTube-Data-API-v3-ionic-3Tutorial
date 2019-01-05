import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

/*
  Generated class for the YtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YtProvider {
  apiKey: any = "AIzaSyCUmRrKVPSWPTmBMn6dN0yICijYrkfaJLQ";
  constructor(public http: Http) {}

  getPlaylistsForChannel(channel) {
    return this.http
      .get(
        "https://www.googleapis.com/youtube/v3/playlists?key=" +
          this.apiKey +
          "&channelId=" +
          channel +
          "&part=snippet,id&maxResults=20"
      )
      .map(this.extractData)
      .catch(this.catchError);
  }

  getListVideos(listId) {
    return this.http
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?key=" +
          this.apiKey +
          "&playlistId=" +
          listId +
          "&part=snippet,id&maxResults=20"
      )
      .map(this.extractData)
      .catch(this.catchError);
  }

  private catchError(error: Response | any) {
    // tokken hatasi 401 doner ise
    let _data = { ...error.json(), status: error.status } || {
      message: "Server Error",
      status: error.status
    };
    return Observable.throw(_data);
  }
  private extractData(res: any) {
    return res.json()["items"];
  }
}
