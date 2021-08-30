export class ApiUrls {

    public static GENERAL_ERROR_MESSAGE = 'Something went wrong, please try again after sometime';
  
    public static get BASE_URL(): string {
        return 'http://localhost:3000/';
    }
    
    public static get studentinfo(): string {
      return this.BASE_URL + 'studentinfo';
  }
  public static get addressinfo(): string {
    return this.BASE_URL + 'addressinfo';
}
}