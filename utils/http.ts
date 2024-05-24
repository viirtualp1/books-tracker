import axios from 'axios'

export default axios.create({
  params: {
    offset: '0',
    limit: '25',
    where: '',
    viewId: 'vw024yluo6bfrg4r',
  },

  headers: {
    'xc-auth':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppbmlubmlraXRhMzA5QGdtYWlsLmNvbSIsImRpc3BsYXlfbmFtZSI6Ik5pa2l0YSBaaW5pbiIsImF2YXRhciI6bnVsbCwidXNlcl9uYW1lIjpudWxsLCJpZCI6InVzdHl6M3R6bm5kcXJjZ2giLCJyb2xlcyI6Im9yZy1sZXZlbC12aWV3ZXIiLCJ0b2tlbl92ZXJzaW9uIjoiNzI4Mzc0NTQyNWRjOTEyZmIyNWRiZWE1Y2Y2ZThjZjJjMDFjNjNmYzRhYmFkZmQxMDhhZWY4OWViZGVmZDM4YTRhYWU5OTQ1ZWE5MWUyOTUiLCJwcm92aWRlciI6ImNvZ25pdG8iLCJpYXQiOjE3MTE5NjEwODgsImV4cCI6MTcxMTk5NzA4OH0.9yHi_reFXEtj5635Ik0HGW9MiuKhcEbZliwR8f7kusw',
  },
})
