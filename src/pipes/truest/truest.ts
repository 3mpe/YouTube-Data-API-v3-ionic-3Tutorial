import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Generated class for the TruestPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "truest"
})
export class TruestPipe implements PipeTransform {
  constructor(private _dom: DomSanitizer) {}
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return this._dom.bypassSecurityTrustResourceUrl(value);
  }
}
