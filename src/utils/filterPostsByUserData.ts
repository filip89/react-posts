import { Address } from '../models/Address';
import { Company } from '../models/Company';
import { Post } from '../models/Post';
import { User } from '../models/User';

export function filterPostsByUserData(posts: Post[], searchValue: string): Post[] {
    const relevantUsersIds = posts.reduce<User['id'][]>((usersIds, post) => {
        if (post.user && !usersIds.includes(post.user.id) && userMatches(post.user, searchValue)) {
            usersIds.push(post.user.id);
        }
        return usersIds;
    }, []);

    return posts.filter((post) => relevantUsersIds.find((userId) => userId === post.userId));
}

function userMatches(user: User, searchValue: string): boolean {
    const searchValueLowCase = searchValue.toLowerCase();
    const userSearchables: KeyOfType<User, string>[] = ['name', 'username', 'email', 'phone', 'website'];
    const matchInRoot = !!userSearchables.find((propName) => {
        return user[propName].toLowerCase().includes(searchValueLowCase);
    });
    if (matchInRoot) return true;

    const companySearchables: KeyOfType<Company, string>[] = ['name', 'catchPhrase', 'bs'];
    const matchInCompany = !!companySearchables.find((propName) => {
        return user.company[propName].toLowerCase().includes(searchValueLowCase);
    });
    if (matchInCompany) return true;

    const addressSearchables: KeyOfType<Address, string>[] = ['street', 'suite', 'city', 'zipcode'];
    const matchInAddress = !!addressSearchables.find((propName) => {
        return user.address[propName].toLowerCase().includes(searchValueLowCase);
    });
    return matchInAddress;
}

// https://stackoverflow.com/a/51419293
type KeyOfType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T];
