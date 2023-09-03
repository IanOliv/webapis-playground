import run, { hasSupport } from '../../apis/web-bluetooth-api';

function WebBluetoothApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button onClick={run}>run demo</button>
    </div>
  );
}

export default WebBluetoothApi;
