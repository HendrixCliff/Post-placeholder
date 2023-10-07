import { useState } from "react";

export default function Post({ post, onExpunge }) {
  const [modifyBody, setModifyBody] = useState(post.body);
  const [isRedacting, setIsRedacting] = useState(false);
  const [alterTitle, setAlterTitle] = useState(post.title);

  function subeditHandler() {
    setIsRedacting(true);
  }

  function eraseHandler() {
    setIsRedacting(false);
  }

  function recordHandler() {
    post.title = alterTitle;
    post.body = modifyBody;
    setIsRedacting(false);
  }

  return (
    <div>
      {!isRedacting ? (
        <>
          <div>
            <h3> {post.title} </h3>
            <p> {post.body} </p>
          </div>
          <div>
            <button onClick={subeditHandler}>Edit</button>
            <button onClick={() => onExpunge(post.id)}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              type="text"
              value={alterTitle}
              onChange={(event) => setAlterTitle(event.target.value)}
            />
            <input
              type="text"
              value={modifyBody}
              onChange={(event) => setModifyBody(event.target.value)}
            />
          </div>
          <div>
            <button onClick={recordHandler}>Save</button>
            <button onClick={eraseHandler}>Cancle</button>
          </div>
        </>
      )}
    </div>
  );
}
