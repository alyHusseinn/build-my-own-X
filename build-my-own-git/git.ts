import Commit from "./commit";
import Branch from "./branch";

class Git {
    private _name: string; // Repo name
    private _last_commit_id: number; // CommitId
    private master: Branch;  // reference to the master
    private HEAD: Branch; // reference to the current branch
    private branches: Branch[]; // list of all branches on that repository

    constructor(name: string) {
        this._name = name;
        this._last_commit_id = -1;
        this.master = new Branch("master", null);
        this.HEAD = this.master;
        this.branches.push(this.master);
    }

    public commit(message: string): Commit {
        let commit = new Commit(++this._last_commit_id, message, this.HEAD.getLastCommit());
        this.HEAD.addCommit(commit);
        return commit;
    }

    public log(): Commit[] {
        let commit: Commit = this.HEAD.getLastCommit();
        let history: Commit[] = [];

        while (commit) {
            history.push(commit);
            console.log(commit.getMessage());
            commit = commit.getPrevParent();
        }

        return history;
    }

    public checkout(branchName: string) {
        // if we have a branch with the same name switch to it
        // else create a new branch and switch to it
        for (let i = 0; i < this.branches.length; i++) {
            if (this.branches[i].getName() === branchName) {
                this.HEAD = this.branches[i];
                console.log("switching to branch " + this.HEAD.getName());
                return;
            }
        }

        let newBranch: Branch = new Branch(branchName, this.HEAD.getLastCommit());
        this.branches.push(newBranch);
        this.HEAD = newBranch;
        console.log("createing a new branch: " + this.HEAD.getName() + ", and switching to it");
    }
}

export default Git;