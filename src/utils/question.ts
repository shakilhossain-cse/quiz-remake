import { FillInTheBlanks, FollowingMatch, MultipleChooise, MultiSelect, TrueFalse, __blank } from "./question.types";



export interface IQuestion {
    id: number,
    ques: string,
    options?: string[],
    ans: string[],
    type: string,
    exam: string,
    matchAns?: string[]
}
export const question: IQuestion[] = [
    {
        id: 1,
        ques: 'What is Html?',
        options: ["markup Language", 'programmingLanguage', 'scripting language', 'stylesheet'],
        ans: ['markup Language'],
        type: MultipleChooise,
        exam: 'html'
    }, {
        id: 2,
        ques: 'Html is a Markup Language',
        options: ["true", 'false'],
        ans: ['true'],
        type: TrueFalse,
        exam: 'html'
    },
    {
        id: 3,
        ques: `Html is a ${__blank} Language`,
        ans: ['markup'],
        type: FillInTheBlanks,
        exam: 'html'
    }, {
        id: 4,
        ques: 'Html is a marup language',
        options: ["true", 'mustbe ture', 'false', 'mustbe false'],
        ans: ["true", 'mustbe ture'],
        type: MultiSelect,
        exam: 'html'
    }, {
        id: 5,
        ques: 'Html Revolation?',
        matchAns: ['html', 'html5'],
        options: ["video", 'img'],
        ans: ['video->html5', 'img->html'],
        type: FollowingMatch,
        exam: 'html'
    }, {
        id: 6,
        ques: 'What is Css?',
        options: ["markup Language", 'programmingLanguage', 'scripting language', 'stylesheet'],
        ans: ['stylesheet'],
        type: MultipleChooise,
        exam: 'css'
    }, {
        id: 7,
        ques: 'Css is a Markup Language',
        options: ["true", 'false'],
        ans: ['false'],
        type: TrueFalse,
        exam: 'css'
    },
    {
        id: 8,
        ques: `Css is a ${__blank}`,
        ans: ['stylesheet'],
        type: FillInTheBlanks,
        exam: 'css'
    }, {
        id: 9,
        ques: 'Css is a marup language',
        options: ["true", 'mustbe ture', 'false', 'mustbe false'],
        ans: ['false', 'mustbe false'],
        type: MultiSelect,
        exam: 'css'
    }, {
        id: 10,
        ques: 'Css Revolation?',
        matchAns: ['css', 'css3'],
        options: ["animation", 'color'],
        ans: ['animation->css3', 'color->css'],
        type: FollowingMatch,
        exam: 'css'
    }
]