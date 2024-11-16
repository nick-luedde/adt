type AdtTimeOptions = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
};

type AdtTimeFlags = {
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
  milliseconds?: boolean;
};

type AdtCreateOptions = {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  utc?: boolean;
};

type AdtModifyOptions = {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  utc?: boolean;
};