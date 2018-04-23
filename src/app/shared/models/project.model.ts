export class Project {
    _id: {
        $oid: string;
    };
    title: string;
    body: string;
    __v: number;
    image: string;
    developers: string;
    backEnd: string;
    frontEnd: string;
    summary: string;
    contribution: string;
    learningOutcome: string;
    repo: string;
    images: Array<string>;
    time: string;
}