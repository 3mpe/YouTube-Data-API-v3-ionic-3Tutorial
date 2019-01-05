import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { YtProvider } from "../../providers/yt/yt";
import { Observable } from "rxjs/Observable";
import { PlayListPage } from "../play-list/play-list";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  channelId = "UCTIPe3HieM-FsaTEPWcMcLQ"; // Devdactic Channel ID
  playlists = [];

  constructor(
    public navCtrl: NavController,
    private yt: YtProvider,
    private alertCtrl: AlertController
  ) {
    this.searchPlaylists();
  }

  searchPlaylists() {
    this.yt.getPlaylistsForChannel(this.channelId).subscribe(
      data => {
        this.playlists = data;
      },
      err => {
        let alert = this.alertCtrl.create({
          title: "Error",
          message: "No Playlists found for that Channel ID",
          buttons: ["OK"]
        });
        alert.present();
      }
    );
  }

  gotoDetailPage(page) {
    this.navCtrl.push(PlayListPage, page);
  }
}
