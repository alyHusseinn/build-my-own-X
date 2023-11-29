class Branch {
    private _name: string;
    private _commit: Commit | null;

    constructor(name: string, commit: Commit | null) {
        this._name = name;
        this._commit = commit;
    }

    public getLastCommit(): Commit {
        return this._commit as Commit;
    }

    public addCommit(commit: Commit) {
        this._commit = commit;
    }

    public getName(): string {
        return this._name;
    }
}

export default Branch;