import { useEffect, useState } from 'react';

const FetchApi = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message || '오류가 발생했습니다.');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>전체 게시글 목록</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트 변경"
      />
      {loading && <div>불러오는중 ...</div>}
      {error && <div className="text-red-900">{error}</div>}

      {!loading && !error && (
        <div className="flex flex-col gap-[10px]">
          {data.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-[5px] rounded border p-4 shadow"
            >
              <h2 className="text-[20px] font-bold">타이틀 : {post.title}</h2>
              <p>내용 :{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
