export class Todo {
    public id: string;
    public candidate: string;
    public task: string;
    public isCompleted: boolean = false;

    public fromJson(data): Todo {
        const me = this;

        me.id = data.id;
        me.candidate = data.candidate;
        me.task = data.task;
        me.isCompleted = data.is_completed;

        return me;
    }
}