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

// Lets add the ability on our Git class to create a commit

class Git {
    private _name: string = ""; // Repo name
    private _last_commit_id: number = -1; // CommitId
    private HEAD: Commit | null = null; // reference to the last commit

    constructor(name: string) {
        this._name = name;
    }

    public commit(message: string): Commit {
        let commit = new Commit(++this._last_commit_id, message, this.HEAD as Commit);
        this.HEAD = commit;
        return commit;
    }

    public log(): Commit[] {
        let commit: Commit = this.HEAD as Commit;
        let history: Commit[] = [];

        while (commit != null) {
            history.push(commit);
            console.log(commit.getMessage());
            commit = commit.getPrevParent();
        }

        return history;
    }
}

let repo = new Git('my-repo');
repo.commit("first commit");
repo.commit('second commit');
repo.commit('third commit');
repo.commit('fourth commit');
repo.log();