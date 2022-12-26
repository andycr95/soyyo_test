
export interface EntitiesResponse {
  code:    string;
  message: string;
  type:    string;
  entity:    Entity;
  traceId: string;
}

export interface Entity {
  entityId:             number;
  name:                 string;
  identificationNumber: string;
  attributeValidator:   string;
  expirationDate:       Date;
  contactName:          string;
  contactMail:          string;
  ipAddress:            string;
  logo:                 string;
  domain:               null;
}
