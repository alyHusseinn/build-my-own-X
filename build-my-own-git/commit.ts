class Commit {
    private _id: number;
    private _message: string;
    private _parent: Commit | null = null;

    constructor(id: number, message: string, parent: Commit) {
        this._id = id;
        this._message = message;
        this._parent = parent;
    }

    public getMessage(): string {
        return this._message + " " + this._id;
    }

    public getPrevParent(): Commit {
        return this._parent as Commit;
    }
}

export default Commit;