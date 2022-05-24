import { question } from "./question"


const getQuestion = (quesData: string) => {
    return question.filter(ans => ans.exam === quesData);
}

export default getQuestion