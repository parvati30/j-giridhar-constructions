declare module "magnific-popup";

import "jquery";

declare module "jquery" {
    interface JQuery {
        magnificPopup(options?: any): JQuery;
    }
}