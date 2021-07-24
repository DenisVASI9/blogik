import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Logger } from "@nestjs/common";
import { createPool } from "slonik";

import type { DatabasePoolType } from "slonik";
import { config } from "../../../configuration";

@Injectable()
export class PgService implements OnModuleInit, OnModuleDestroy {
  public pool: DatabasePoolType;

  onModuleInit(): void {
    const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = config;
    this.pool = createPool(
      `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`
    );
  }

  onModuleDestroy(): void {
    this.pool.end().then(() => {
      Logger.log("Pool ended", "PgService");
    });
  }
}
