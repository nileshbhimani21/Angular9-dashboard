import * as $ from "jquery";

export class Helpers {
    static setLoading(enable) {
		let body = $('body');
		if (enable) {
			$(body).addClass('loading')
		} else {
			$(body).removeClass('loading')
		}
	}
}