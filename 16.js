document.getElementById('snbtForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('form-page').style.display = 'none';
            document.getElementById('result-page').style.display = 'block';
        });
        document.querySelectorAll('.selanjutnya1, .selanjutnya2').forEach(button => {
            button.addEventListener('click', function() {
                document.getElementById('result-page').style.display = 'none';
                document.getElementById('page3').style.display = 'block';
            });
        });