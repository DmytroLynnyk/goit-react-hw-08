import { useSelector } from "react-redux";
import { DocumentTitle } from "../components/DocumentTitle";
import { selectUser } from "../redux/auth/selectors";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Profile() {
  const user = useSelector(selectUser);
  return (
    <>
      <DocumentTitle>Profile</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Profile</h1>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <img src={user.avatar} />
        </div>
      </div>
    </>
  );
}
