"use strict";

import Server from "@src/cores/server";
import { ClusterService } from "@src/cores/cluster";

(async function start() {
  // this.logger.log(ex_util);
  const server = new Server();
  ClusterService.register(server.start);
})();
