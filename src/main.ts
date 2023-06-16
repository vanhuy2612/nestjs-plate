"use strict";

import Server from "@cores/server";
import { ClusterService } from "@cores/cluster";

(async function start() {
  // this.logger.log(ex_util);
  const server = new Server();
  ClusterService.register(server.start);
})();
