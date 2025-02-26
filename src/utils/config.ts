class Config {
  public enableSeion: boolean = true;
  public enableDakuon: boolean = true;
  public enableYouon: boolean = true;
  // public enableHira: boolean = true;
  // public enableKana: boolean = true;
  public enableRomaji: boolean = true;
  public blankHira: boolean = true; // fill in blank
  public blankKana: boolean = true;
  // public blankRomaji: boolean = false;
  public totalCount: number = 10; // 0 for endless
  public currentCount: number = 0;
  public mistakeCount: number = 0;
  public startTime: number = Date.now();
  public started: boolean = false;
  public weights: Record<string, number> = {};
  public fonts: string = '"Noto Sans JP"';
  // public lastNoticeTime: string = "";
  public optionCount: number = 6;
  public correctWaitingTime: number = 500;
  public wrongWaitingTime: number = 2000;
  [key: string]: any;

  public deserialize(jsonStr: string) {
    let obj = JSON.parse(jsonStr);
    Object.keys(obj).forEach((k) => {
      if (this[k] !== undefined) {
        this[k] = obj[k];
      }
    });
  }

  public serialize(): string {
    return JSON.stringify(this);
  }
}

export const GLOBAL_CONFIG = new Config();

export function loadConfig() {
  let item = localStorage.getItem("config");
  if (item) {
    GLOBAL_CONFIG.deserialize(item);
  }
  saveConfig();
}

export function saveConfig(config: Config = GLOBAL_CONFIG) {
  localStorage.setItem("config", config.serialize());
}
