export interface StopRealTimeData {
  RealTimeData: RealTimeData;
}

export interface RealTimeData {
  avmdata: string;
  error_code: any;
  error_message: any;
  operation: string;
  status: string;
  stopdata: StopData[];
  stopdetail: StopDetail[];
}

export interface StopData {
  lat: string;
  lat_ext: string;
  long: string;
  long_ext: string;
  palina: string;
  palinanome: string;
}

export interface StopDetail {
  ariacond: string;
  disabili: string;
  distanza: number;
  distanzaSpecified: boolean;
  distanzaAVM: string;
  emetbigl: string;
  frqminuti: string;
  infomobi: string;
  infotype: string;
  line: string;
  linecode: string;
  linedest: string;
  linepercorsotype: string;
  linetype: string;
  mom_line: string;
  notearrivo: string;
  notecapoli: string;
  time: number;
  timeSpecified: boolean;
  trbinario: string;
  trdestinazione: string;
  trdestinazioneid: string;
  trorario: string;
  trritardo: string;
  ultfermata: number;
  ultfermataSpecified: boolean;
}
