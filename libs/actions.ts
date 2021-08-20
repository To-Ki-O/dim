import { ensureDir, ensureFile } from "../deps.ts";
import {
  DEFAULT_DATAFILES_PATH,
  DEFAULT_DIM_FILE_PATH,
  DEFAULT_DIM_LOCK_FILE_PATH,
} from "./consts.ts";

interface Action {
}

export class InitAction implements Action {
  static async createDataFiles() {
    ensureDir(DEFAULT_DATAFILES_PATH);
  }
  static async createDimJson() {
    ensureFile(DEFAULT_DIM_FILE_PATH);
    ensureFile(DEFAULT_DIM_LOCK_FILE_PATH);
  }
  async execute(options: any) {
    console.log(options);
    await Promise.all([InitAction.createDataFiles(), InitAction.createDimJson()])
  }
}

export class InstallAction implements Action {
  execute(options: any, url: string): void {
    console.log(options, url);
  }
}

export class UninstallAction implements Action {
  execute(options: any, name: string): void {
    console.log(options, name);
  }
}

export class UpdateAction implements Action {
  execute(options: any, name: string): void {
    console.log(options, name);
  }
}
