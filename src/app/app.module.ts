import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";

// pages
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { PlayListPage } from "../pages/play-list/play-list";
import { PlayListDetailPage } from "../pages/play-list-detail/play-list-detail";

// providers
import { YtProvider } from "../providers/yt/yt";

// other providers
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player";

@NgModule({
  declarations: [MyApp, HomePage, PlayListPage, PlayListDetailPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, PlayListPage, PlayListDetailPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
