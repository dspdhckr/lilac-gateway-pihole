import dotenv from "dotenv";

dotenv.config();

export const API_TOKEN = process.env.CLOUDFLARE_API_KEY;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  // .filter(x => x) removes empty items from the URL arrays
  ? process.env.ALLOWLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const RECOMMENDED_ALLOWLIST_URLS = [
"https://raw.githubusercontent.com/nextdns/click-tracking-domains/main/domains",  
"https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/official-domains.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist-referral.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist.txt",
];

export const RECOMMENDED_BLOCKLIST_URLS = [
 "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
  "https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/pro.txt",
  "https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/domains/tif.txt",
 "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
  "https://easylist-downloads.adblockplus.org/easylistchina.txt",
  "https://easylist-downloads.adblockplus.org/indianlist.txt",
 "https://big.oisd.nl/domainswild2",
  "https://easylist-downloads.adblockplus.org/antiadblockfilters.txt",
 "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_gambling.txt",
  "https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt",
  "https://malware-filter.gitlab.io/malware-filter/urlhaus-filter-hosts.txt",
  "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Ads-Rule.txt",
  "https://badmojr.gitlab.io/1hosts/Lite/adblock.txt",
  "https://someonewhocares.org/hosts/zero/hosts",
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
  "https://raw.githubusercontent.com/Cats-Team/AdRules/main/dns.txt",
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareAdGuardHome.txt",
  "https://malware-filter.gitlab.io/malware-filter/phishing-filter-agh.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/dyndns.txt",
  "https://phishing.army/download/phishing_army_blocklist_extended.txt",
  "https://raw.githubusercontent.com/durablenapkin/scamblocklist/master/adguard.txt",
  "https://raw.githubusercontent.com/ShadowWhisperer/BlockLists/master/Lists/Malware",
  "https://raw.githubusercontent.com/AssoEchap/stalkerware-indicators/master/generated/hosts",
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/AdGuard%20Home%20Compilation%20List/AdGuardHomeCompilationList-Notifications.txt",
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/GameConsoleAdblockList.txt",
  "https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/SmartTV-AGH.txt",
  "https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt",
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt",
  "https://raw.githubusercontent.com/mitchellkrogza/The-Big-List-of-Hacked-Malware-Web-Sites/master/hosts",
];
