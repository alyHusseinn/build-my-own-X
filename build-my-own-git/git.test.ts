import Git from "./git";

let repo = new Git('my-repo');

repo.commit("first commit");
repo.commit('second commit');
repo.commit('third commit');
repo.commit('fourth commit');

repo.log();

repo.checkout("testing");
repo.commit("first commit in testing");
repo.commit("second commit in testing");

repo.log();

repo.checkout("master");
repo.log();
