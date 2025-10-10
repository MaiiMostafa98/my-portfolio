'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  const router = useRouter();

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Oops!</h1>

//       <FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '4rem', color: '#8b8b8bff', margin: '1rem 0' }} />

//       <p  style={styles.message}>
//         PAGE NOT FOUND.
//       </p>

//     </div>
//   );

return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops!</h1>

      <FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '4rem', color: '#8b8b8bff', margin: '1rem 0' }} />

      <p  style={styles.message}>
        PAGE NOT FOUND.
      </p>

    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color:  '#484748ff',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#666',

  },
 
};



