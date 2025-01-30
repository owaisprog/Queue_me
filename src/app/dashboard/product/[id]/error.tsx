'use client';

import Button from '@mui/material/Button';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';

// ----------------------------------------------------------------------

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Ensure error is an instance of Error
  const errorMessage = error instanceof Error ? error.message : 'Product not found!';
  const errorDigest = error instanceof Error ? error.digest : undefined;

  return (
    <DashboardContent sx={{ pt: 5 }}>
      <EmptyContent
        filled
        title={errorMessage}
        action={
          <>
            <Button
              component={RouterLink}
              href={paths.dashboard.product.root}
              startIcon={<Iconify width={16} icon="eva:arrow-ios-back-fill" />}
              sx={{ mt: 3 }}
            >
              Back to list
            </Button>
            <Button
              onClick={reset} // Use the reset function to allow retrying
              startIcon={<Iconify width={16} icon="eva:refresh-fill" />}
              sx={{ mt: 3, ml: 2 }}
            >
              Try again
            </Button>
          </>
        }
        sx={{ py: 10, height: 'auto', flexGrow: 'unset' }}
      />
    </DashboardContent>
  );
}