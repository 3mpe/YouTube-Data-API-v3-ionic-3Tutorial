import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player";
import { YtProvider } from "../../providers/yt/yt";
import { DomSanitizer } from "@angular/platform-browser";
import { PlayListDetailPage } from "../play-list-detail/play-list-detail";

/**
 * Generated class for the PlayListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-play-list",
  templateUrl: "play-list.html"
})
export class PlayListPage {
  videos = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private yt: YtProvider,
    private alertCtrl: AlertController,
    private _dom: DomSanitizer
  ) {}

  ionViewDidLoad() {
    this.getListVideos();
  }

  getListVideos() {
    let lastId = this.navParams.get("id");
    this.yt.getListVideos(lastId).subscribe(
      data => {
        this.videos = data;
      },
      () => {
        let alert = this.alertCtrl.create({
          title: "Hata",
          subTitle: "Video Listesi alinamadi",
          buttons: ["Tamam"]
        });
        alert.present();
      }
    );
  }

  openDetailPage(video: any) {
    let videoUrl = this._dom.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" +
        video.snippet.resourceId.videoId +
        "?rel=1&amp;showinfo=0&html5=1"
    );
    return this.navCtrl.push(PlayListDetailPage, { videoUrl });
  }
}
