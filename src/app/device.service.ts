import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root',
})
export class DeviceService {
    private readonly baseUrl: string = "https://api.restful-api.dev";
    constructor(private httpClient: HttpClient) {
    }

    getDeviceList() {
        return this.httpClient.get(`${this.baseUrl}/objects`)
    }
}