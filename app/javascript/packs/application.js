import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "src/index"
import 'bootstrap/dist/js/bootstrap.bundle'
Rails.start()
Turbolinks.start()
ActiveStorage.start()