import { useEffect, useState } from "react";
import { fetcher } from "../lib/api";

export default function useApi(url, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let ignore = false;
    (async () => {
      try { setLoading(true); setError(""); const r = await fetcher(url); if (!ignore) setData(r); }
      catch (e) { if (!ignore) setError(e?.response?.data?.message || "Request failed"); }
      finally { if (!ignore) setLoading(false); }
    })();
    return () => { ignore = true; };
  }, [url]);
  return { data, loading, error };
}
