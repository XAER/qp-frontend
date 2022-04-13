export interface Stop {
  Code: string;
  Distance: any;
  Id: number;
  Name: string;
  Type: number;
  TypeName: string;
  Routes: Route[];
}

export interface Route {
  Accessibility: boolean;
  CausalText: any;
  Languages: Language[];
  LastUpdate: string;
  LineCode: string;
  LineId: number;
  LineName: string;
  LineType: number;
  LineTypeName: string;
  Note: any;
  Primary: boolean;
  ResolutionTime: any;
  ResolutionTimeName: any;
  ResolutionTimeText: any;
  RouteCode: string;
  RouteDescription: string;
  RouteId: number;
  RouteName: string;
  RouteSection: any;
  RouteSectionName: string;
  RouteStatus: number;
  RouteStatusName: string;
  RouteStopId: number;
  RouteStopOrder: number;
  RouteType: any;
  RouteTypeName: any;
  Schedule: {
    ActiveDays: Array<number>;
    IsOn: boolean;
  };
  StatusDefinitionText: any;
  StatusText: any;
  StopCausal: any;
  StopCausalName: any;
  StopServices: StopService[];
  StopStatus: number;
  StopStatusBaseName: string;
  StopStatusDefinition: any;
  StopStatusDefinitionName: any;
  StopStatusName: string;
  UpdatedBy: any;
  ViewRouteUrl: any;
}

export interface Language {
  CausalText: any;
  Current: true;
  Id: number;
  LanguageName: string;
  Note: any;
  ResolutionTimeText: any;
  StatusDefinitionText: any;
  StatusText: any;
}

export interface StopService {
  Key: number;
  Name: string;
  Enabled: boolean;
}
