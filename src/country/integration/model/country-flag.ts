import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CountryFlag {
    @Expose({ name: 'png'})
    png: string;
}