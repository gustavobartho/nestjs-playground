import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./test.strategy";

@Module({
    imports: [
        PassportModule,
    ],
    controllers: [],
    providers: [
        LocalStrategy,
    ],
    exports: [],
})
export class AuthModule { }